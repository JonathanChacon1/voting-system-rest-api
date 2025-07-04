# Documentación de APIs

## Votantes

### `POST /voters`
- **Descripción:** Registra un nuevo votante.
- **Cuerpo de la Solicitud (JSON):**
  ```json
  {
    "name": "Luis Mesa",
    "email": "luis.mesa@example.com"
  }
  ```

### `GET /voters`
- **Descripción:** Obtiene la lista de todos los votantes.

### `GET /voters/{id}`
- **Descripción:** Obtiene los detalles de un votante por ID.
- **Parámetros de Ruta:**
  - `id`: ID del votante.

### `DELETE /voters/{id}`
- **Descripción:** Elimina un votante por ID.
- **Parámetros de Ruta:**
  - `id`: ID del votante.

## Candidatos

### `POST /candidates`
- **Descripción:** Registra un nuevo candidato.
- **Cuerpo de la Solicitud (JSON):**
  ```json
  {
    "name": "Luisa Gutierrez",
    "party": "Partido A"
  }
  ```

### `GET /candidates`
- **Descripción:** Obtiene la lista de todos los candidatos.

### `GET /candidates/{id}`
- **Descripción:** Obtiene los detalles de un candidato por ID.
- **Parámetros de Ruta:**
  - `id`: ID del candidato.

### `DELETE /candidates/{id}`
- **Descripción:** Elimina un candidato por ID.
- **Parámetros de Ruta:**
  - `id`: ID del candidato.

## Votos

### `POST /votes`
- **Descripción:** Emite un voto.
- **Cuerpo de la Solicitud (JSON):**
  ```json
  {
    "voter_id": "1",
    "candidate_id": "1"
  }
  ```

### `GET /votes`
- **Descripción:** Obtiene todos los votos emitidos.

### `GET /votes/statistics`
- **Descripción:** Obtiene estadísticas de la votación, incluyendo el total de votos por candidato, el porcentaje de votos por candidato, y el total de votantes que han votado. 