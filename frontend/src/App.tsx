import { useState } from 'react'

export default function App() {
    const [message, setMessage] = useState('Ready to connect')
    const [loading, setLoading] = useState(false)

    async function checkConnection() {
        setLoading(true)
        setMessage('Checking...')

        try {
            // כאן ה"דלפק" קורא ל"עובד"
            const response = await fetch('http://127.0.0.1:8000/health')
            if (!response.ok) throw new Error('Server not ready')

            const data = await response.json()
            if (data.database !== 'connected') {
                throw new Error('Database not ready')
            }

            setMessage('Database connected')
        } catch {
            setMessage('Connection failed. Check the server and database.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main>
            <h1>FluentLoop</h1>
            <p>A small beginning for your English practice.</p>
            <button onClick={checkConnection} disabled={loading}>
                {loading ? 'Checking...' : 'Check connection'}
            </button>
            <p role="status">{message}</p>
        </main>
    )
}