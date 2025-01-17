import Header from "./Header.tsx";
import ListView from "./ListView.tsx";

const MainPage = () => {
    return (
        <>
            <Header />
            <div className='main-conteiner'>
                <ListView />
            </div>
        </>
    )
}

export default MainPage
