const LoginForm = () => {
    const styles = {
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "300px",
            margin: "0 auto"
        },
        input: {
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px"
        },
        button: {
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px"
        }
    }

    return (
        <form action="" style={styles.form}>
            <input style={styles.input} type="text" placeholder="Username" />
            <input style={styles.input} type="email" placeholder="Email" />
            <input style={styles.input} type="password" placeholder="Password" />
            <button style={styles.button}>Login</button>
        </form>
    );
};

export default LoginForm;