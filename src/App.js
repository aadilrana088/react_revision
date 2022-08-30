import './App.css';

function App() {
    const name = 'Aadil';
    const x = false;
    return (
        <>
            <h1>{name}</h1>
            <h2>{x ? 'yes' : 'no'}</h2>
        </>
    );
}

export default App;
