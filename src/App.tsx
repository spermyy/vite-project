import './App.css';

const Box: React.FC<{ width: number | string; height: number | string; backgroundColor: string; borderColor: string; text: string }> = ({ width, height, backgroundColor, borderColor, text }) => {
  return (
    <div className='box' style={{ width, height, backgroundColor, borderColor }}>
      {text}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className='Main'>
      <h1>Brixter Bondoc</h1>
      <div className='BoxContainer'>
        <Box 
          width='200px' 
          height='200px' 
          backgroundColor='red' 
          borderColor='white' 
          text='CPEITEL' 
        />
      </div>
    </div>
  );
};

export default App;
