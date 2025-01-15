import Form from "../components/Form"

function Login() {
    return  <div className="centered-container">
                <Form route="/api/token/" method="login" />
                <p>Dont have an account? <a href="/register">Register</a></p>
            </div>
}

export default Login