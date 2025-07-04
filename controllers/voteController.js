const Vote = require('../models/Vote');
const Voter = require('../models/Voter');
const Candidate = require('../models/Candidate');

exports.castVote = async (req, res) => {
  try {
    const { voter_id, candidate_id } = req.body;
    const voter = await Voter.findByPk(voter_id);
    if (!voter || voter.has_voted) {
      return res.status(400).json({ message: 'Votante no válido o ya ha votado.' });
    }
    const candidate = await Candidate.findByPk(candidate_id);
    if (!candidate) {
      return res.status(400).json({ message: 'Candidato no válido.' });
    }
    await Vote.create({ voter_id, candidate_id });
    await voter.update({ has_voted: true });
    await candidate.increment('votes');
    res.status(201).json({ message: 'Voto emitido con éxito.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al emitir el voto.' });
  }
};

exports.getVotes = async (req, res) => {
  try {
    const votes = await Vote.findAll();
    res.status(200).json(votes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los votos.' });
  }
};

exports.getVoteStatistics = async (req, res) => {
  try {
    const candidates = await Candidate.findAll();
    const totalVotes = await Vote.count();

    const statistics = await Promise.all(
        candidates.map(async candidate => {
            const candidateVotes = await Vote.count({ where: { candidate_id: candidate.id } });
            return {
            candidateId: candidate.id,
            candidateName: candidate.name,
            totalVotes: candidateVotes,
            votePercentage: totalVotes > 0 ? ((candidateVotes / totalVotes) * 100).toFixed(2) + '%' : '0%'
            };
        })
    );

    const totalVoters = await Voter.count({ where: { has_voted: true } });

    res.status(200).json({ statistics, totalVoters });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las estadísticas de votación.' });
  }
};
