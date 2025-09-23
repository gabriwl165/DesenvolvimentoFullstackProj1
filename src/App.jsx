function App() {

    return (
        <BrowserRouter>
            <DrinkProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </DrinkProvider>
        </BrowserRouter>
    )
}

export default App