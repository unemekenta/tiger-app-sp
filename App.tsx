import { NativeBaseProvider} from 'native-base';
import HomeStack from './components/organisms/HomeStack';

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <HomeStack/>
      </NativeBaseProvider>
    </>
  );
}
