import useUser from "@/hooks/useUser";
import { FormEvent } from "react";

type FormProps = {
  errorMessage: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function Form({ errorMessage, onSubmit }: FormProps) {
  const { user } = useUser();

  if (user?.isLoggedIn) {
    return <div>Already logged in</div>;
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        <span>Type your GitHub username</span>
        <input type="text" name="username" required />
      </label>

      <button type="submit">Login</button>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <style jsx>{`
        form,
        label {
          display: flex;
          flex-flow: column;
        }
        form {
          max-width: 600px;
          margin: 0 auto;
        }
        label > span {
          font-weight: 600;
        }
        input {
          padding: 8px;
          margin: 0.8rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          min-height: 2rem;
        }
        .error {
          color: brown;
          margin: 1rem 0 0;
        }
      `}</style>
    </form>
  );
}
