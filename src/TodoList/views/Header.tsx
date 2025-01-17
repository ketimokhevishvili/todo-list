import logo from '@/assets/images/logo.png'

const Header = () => {
    return (
        <div className='header-conteiner mt-2'>
            <div className='d-flex justify-content-center align-items-center'>
                <img className='header-img' src={logo} alt={'icon'}/>
                <h1 className='p-3'> Easy Recipes Blog </h1>
            </div>
        </div>
    )
}

export default Header
