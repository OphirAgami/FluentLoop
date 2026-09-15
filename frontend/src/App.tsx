import { useEffect, useState } from 'react'
import './App.css'

function App() {
    // משתנה מצב (State) שישמור את ההודעה שנקבל מהשרת
    const [message, setMessage] = useState<string>('Loading...')

    // useEffect רץ פעם אחת ברגע שהקומפוננטה עולה למסך
    useEffect(() => {
        fetch('http://localhost:8000')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching data:', error))
    }, [])

    return (
        <div className="App">
            <h1>Welcome to FluentLoop</h1>
            <div className="card" style={{ padding: '2em', backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
                <h3>Message from Python Backend:</h3>
                <p style={{ color: '#646cff', fontSize: '1.2em', fontWeight: 'bold' }}>
                    {message}
                </p>
            </div>
        </div>
    )
}

export default App