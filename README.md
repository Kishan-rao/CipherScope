# CipherScope — Interactive Cryptography Algorithm Explorer

> **Classical. Symmetric. Asymmetric. Explained visually.**

CipherScope is an interactive educational platform for understanding cryptographic algorithms through manual implementations, mathematical calculations, and step-by-step visualizations. It pairs a React frontend with a FastAPI backend that returns detailed traces for each operation.

## Purpose and educational objectives

CipherScope helps learners connect cryptographic formulas to the operations that produce ciphertext. Explore the arithmetic behind Vigenère, inspect AES-128 state transformations round by round, and follow RSA key derivation and modular exponentiation. The implementations are intended for learning and experimentation.

## Features and algorithms

- **Vigenère Cipher:** encrypt and decrypt alphabetic text with modular arithmetic over \(\mathbb{Z}_{26}\), with a per-character calculation trace.
- **AES-128:** encrypt and decrypt 128-bit blocks, inspect the 4×4 state and all ten rounds, and view the key schedule.
- **RSA:** derive a key pair from supplied primes and an exponent, then trace encryption or decryption using square-and-multiply.
- Interactive pages, example inputs, and a health indicator for the backend API.

## Technology stack

- Frontend: React 18, React Router, Vite, Tailwind CSS, Axios, and Lucide React.
- Backend: Python 3.10+, FastAPI, Pydantic, and Uvicorn.
- Tests: Pytest and HTTPX.

## Project structure

```text
CNS-Cryptography-Lab/       # Existing local directory name; not changed
├── frontend/               # React application and frontend guide
├── backend/                # FastAPI application, algorithms, and tests
└── README.md               # Project overview and setup
```

## Environment configuration

The frontend accepts `VITE_API_URL` in `frontend/.env.local` to set the API base URL. If unset, the client uses `http://localhost:8000/api/v1`. The Vite development server proxies `/api` requests to port 8000. The backend's local CORS origins are configured in `backend/app/main.py`.

## Run the application

Start the backend in one terminal:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

On macOS or Linux, activate the environment with `source .venv/bin/activate`.

Start the frontend in a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`. The API is available at `http://localhost:8000`; interactive Swagger documentation is at `/docs` and ReDoc at `/redoc`.

## Run the test suite

Run backend tests from `backend/` after installing its requirements:

```powershell
python -m pytest -v
```

Build the frontend from `frontend/` with `npm run build`.

## API documentation and endpoints

FastAPI serves OpenAPI documentation at `/docs` and `/redoc`. API routes are under `/api/v1`:

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/v1/health` | Service status and supported algorithms |
| POST | `/api/v1/vigenere/encrypt` | Encrypt text with Vigenère |
| POST | `/api/v1/vigenere/decrypt` | Decrypt text with Vigenère |
| POST | `/api/v1/aes/encrypt` | Encrypt one AES-128 block |
| POST | `/api/v1/aes/decrypt` | Decrypt one AES-128 block |
| POST | `/api/v1/rsa/generate-keys` | Derive RSA key values |
| POST | `/api/v1/rsa/encrypt` | Encrypt an RSA message |
| POST | `/api/v1/rsa/decrypt` | Decrypt an RSA ciphertext |

Request and response schemas, algorithm details, and setup notes are in [backend/README.md](./backend/README.md). Frontend development information is in [frontend/README.md](./frontend/README.md).

## AES-128 known-answer test

The AES tests include the FIPS-197/NIST known-answer vector:

| Input | Hex value |
|---|---|
| Key | `000102030405060708090a0b0c0d0e0f` |
| Plaintext | `00112233445566778899aabbccddeeff` |
| Expected ciphertext | `69c4e0d86a7b0430d8cdb78070b4c55a` |

The test is `backend/tests/test_aes.py::test_aes_nist_known_answer_vector_encryption`.

## Educational limitations and security

CipherScope is an educational demonstration, not production cryptographic software. Vigenère is a historical cipher, this AES implementation is designed to expose internal steps rather than provide hardened cryptographic handling, and the RSA examples do not provide padding or a secure protocol. Do not use this application or its outputs to protect real data.

The project was developed in a CNS coursework context; the existing repository directory and Git remote are retained.
