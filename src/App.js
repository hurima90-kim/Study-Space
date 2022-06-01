import './App.css';
import UseInput from './hooks/useInput';
import UseTabs from './hooks/useTabs';
import UseTitle from './hooks/useTitle';
import UseClick from './hooks/useClick';
import UseConfirm from './hooks/useConfirm';
import UsePreventLeave from './hooks/usePreventLeave';

function App() {
    return (
        <div className="App">
            {/* <UseInput /> */}
            {/* <UseTabs /> */}
            {/* <UseTitle /> */}
            {/* <UseClick /> */}
            {/* <UseConfirm /> */}
            <UsePreventLeave />
        </div>
    );
}

export default App;
