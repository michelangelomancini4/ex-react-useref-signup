import { useMemo, useState, useRef } from 'react';

function App() {

  // Controlled state for input values
  const [username, setUsername] = useState('mike1212');
  const [password, setPassword] = useState('mike1212!');
  const [description, setDescription] = useState('Un developer appassionato!');

  // Characters allowed in the validation
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

  // Refs for uncontrolled fields 
  const fullNameRef = useRef();
  const specializationRef = useRef();
  const experienceRef = useRef();

  console.log('rendering');

  // Check if the username is valid (letters or numbers, at least 6 characters)
  const isUsernameValid = useMemo(() => {
    const validUsername = username.split("").every(char =>
      letters.includes(char.toLowerCase()) || numbers.includes(char)
    );
    return validUsername && username.length >= 6;
  }, [username]);

  // Check if the password is valid: - at least 6 characters ,includes at least 1 letter, 1 number, and 1 symbol
  const isPasswordValid = useMemo(() => {
    return password.length >= 6 &&
      password.split("").some(char => letters.includes(char)) &&
      password.split("").some(char => numbers.includes(char)) &&
      password.split("").some(char => symbols.includes(char));
  }, [password]);

  // Check if the description is between 10 and 1000 characters
  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 10 &&
      description.trim().length <= 1000;
  }, [description]);

  // Function that runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get values from uncontrolled inputs 
    const fullName = fullNameRef.current.value;
    const specialization = specializationRef.current.value;
    const experience = experienceRef.current.value;

    // Validate all fields before submitting
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

    // Create the object to send or save
    const formData = {
      fullName,
      username,
      password,
      specialization,
      experience,
      description,
    };

    // Print the user data to the console
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
            ref={fullNameRef}
          />
        </label>

        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* Show validation messages for username */}
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
          {/* Show validation messages for password */}
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
          <select ref={specializationRef}>
            <option value="">Scegli </option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>

        <label>
          Anni di esperienza:
          <input
            type="number"
            ref={experienceRef}
          />
        </label>

        <label>
          Descrizione:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* Show validation messages for description */}
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
