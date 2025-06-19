import { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experience.trim() ||
      experience <= 0 ||
      !description.trim()
    ) {
      alert('Per favore compila tutti i campi correttamente.');
      return;
    }
    const formData = {
      fullName,
      username,
      password,
      specialization,
      experience,
      description,
    };


    console.log('Dati utente registrato:', formData);
  };

  return (
    <div >
      <h1>Registrazione</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Nome completo:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}

          />
        </label>

        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          Specializzazione:
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>

        <label>
          Anni di esperienza:
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </label>

        <label>
          Descrizione:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}

export default App;
