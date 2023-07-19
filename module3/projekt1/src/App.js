import { Route, Routes, Link} from "react-router-dom"

const PlayerAPI = {
    players: [
        {number: 1, userName: "Anna89"},
        {number: 2, userName:"kirieshka78"},
        {number: 3, userName:"yukikx"},
        {number: 4, userName:"svetik"},
        {number: 5, userName:"skyfirecat"},
    ],
    all: function () {return this.players},
    get: function (id) {
        const isPlayer = p = p.number === id
        return this.players.find(isPlayer)
    }
}

const Home = () => (
    <div>
        <h1>Добро пожаловать на сайт!</h1>
    </div>
)

const FullRoster = () =>(
    <div>
        <ul>
            {
                PlayerAPI.all().
            }
        </ul>
    </div>
)

const Roster = () => (
    <div>
        <Routes>
            <Route path='' element={<FullRoster/>}/>
        </Routes>
    </div>
)

const Schedule = () => (
    <div>
        <ul>
            <li>07.07.23 утро</li>
            <li>14.07.23 день</li>
            <li>21.07.23 вчер</li>
        </ul>
    </div>
)

const Header =() => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
               <li><Link to='/roster'>Roster</Link></li>
               <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
        </nav>
    </header>
)


const Main =() => (
    <main>
        <Routes>
            <Route path='/' element={<Home/>}/>
                <Route path='/roster/*' element={<Roster/>}/>
                <Route path='schedule' element={<Schedule/>}/>
        </Routes>
    </main>
)

const App = () => (
    <div>
        <Header/>
        <Main/>
    </div>
)

export default App