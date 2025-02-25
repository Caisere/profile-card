import './index.css';
import Avatar from './components/Avatar';
import Skill from './components/Skill';
import Information from './components/Information';


function App() {
    return (
        <div className="card">
            <div className='container'>
                <Avatar />
                <div className='information--con'>
                    <Information />
                    <div className='skill--con'>
                        <Skill />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
