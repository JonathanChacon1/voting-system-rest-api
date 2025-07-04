const Candidate = require('../models/Candidate');
const Voter = require('../models/Voter');

exports.registerCandidate = async (req, res) => {
    try {
        const { name, party } = req.body;

        // Verificar si ya está registrado como votante
        const existingVoter = await Voter.findOne({ where: { name } });
        if (existingVoter) {
        return res.status(400).json({ message: 'No puede registrarse como candidato porque ya es votante.' });
        }

        const candidate = await Candidate.create({ name, party });
        res.status(201).json(candidate);
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el candidato.' });
    }
};

exports.getCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.findAll();
        res.status(200).json(candidates);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la lista de candidatos.' });
    }
};

exports.getCandidateById = async (req, res) => {
    try {
        const candidate = await Candidate.findByPk(req.params.id);
        if (!candidate) {
        return res.status(404).json({ message: 'Candidato no encontrado.' });
        }
        res.status(200).json(candidate);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el candidato.' });
    }
};

exports.deleteCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.findByPk(req.params.id);
        if (!candidate) {
        return res.status(404).json({ message: 'Candidato no encontrado.' });
        }
        await candidate.destroy();
        res.status(200).json({ message: 'Candidato eliminado con éxito.' });
    } catch (error) {
        console.error('Error al eliminar el candidato:', error);
        res.status(500).json({ message: 'Error al eliminar el candidato.' });
    }
};
