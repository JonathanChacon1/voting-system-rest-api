const Voter = require('../models/Voter');
const Candidate = require('../models/Candidate');

exports.registerVoter = async (req, res) => {
  try {
    const { name, email } = req.body;

    // Verificar si ya es candidato
    const existingCandidate = await Candidate.findOne({ where: { name } });
    if (existingCandidate) {
      return res.status(400).json({ message: 'No puede registrarse como votante porque ya es candidato.' });
    }

    // Verificar si ya es votante
    const existingVoter = await Voter.findOne({ where: { email } });
    if (existingVoter) {
      return res.status(400).json({ message: 'El votante ya está registrado.' });
    }

    const voter = await Voter.create({ name, email });
    res.status(201).json(voter);
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el votante.' });
  }
};

exports.getVoters = async (req, res) => {
  try {
    const voters = await Voter.findAll();
    res.status(200).json(voters);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la lista de votantes.' });
  }
};

exports.getVoterById = async (req, res) => {
  try {
    const voter = await Voter.findByPk(req.params.id);
    if (!voter) {
      return res.status(404).json({ message: 'Votante no encontrado.' });
    }
    res.status(200).json(voter);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el votante.' });
  }
};

exports.deleteVoter = async (req, res) => {
  try {
    const voter = await Voter.findByPk(req.params.id);
    if (!voter) {
      return res.status(404).json({ message: 'Votante no encontrado.' });
    }
    await voter.destroy();
    res.status(200).json({ message: 'Votante eliminado con éxito.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el votante.' });
  }
};
