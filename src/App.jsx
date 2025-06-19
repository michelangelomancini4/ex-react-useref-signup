import { useMemo, useState } from 'react';

function App() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');


  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

  const isUsernameValid = useMemo(() => {

    const validUsername = username.split("").every(char => letters.includes(char.toLowerCase()) || numbers.includes(char))
    return validUsername && username.length >= 6;

  }, [username]);


  const isPasswordValid = useMemo(() => {
    return password.length >= 6 && password.split("").some(char => letters.includes(char)) &&
      password.split("").some(char => numbers.includes(char)) &&
      password.split("").some(char => symbols.includes(char))


  }, [password]);

  const isDescriptionValid = useMemo(() => {

    return description.trim().length >= 10 &&
      description.trim().length <= 1000
  }, [description])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experience.trim() ||
      experience <= 0 ||
      !description.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
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
          {username && !isUsernameValid && (
            <p className="invalid">
              Solo lettere e numeri, almeno 6 caratteri.
            </p>
          )}
          {username && isUsernameValid && (
            <p className="valid">
              Username valido
            </p>
          )}
        </label>


        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password && !isPasswordValid && (
            <p className="invalid">
              Almeno 6 caratteri, 1 lettera, 1 numero, 1 simbolo.
            </p>
          )}
          {password && isPasswordValid && (
            <p className="valid">
              Password valida
            </p>
          )}
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
          {description && !isDescriptionValid && (
            <p className="invalid">
              Deve contenere tra 100 e 1000 caratteri.
            </p>
          )}
          {description && isDescriptionValid && (
            <p className="valid">
              Descrizione valida
            </p>
          )}
        </label>

        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}

export default App;
