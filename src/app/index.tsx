import { Layout } from '../shared/ui';
import { TabManagement } from '../widgets';
import { ThemeProvider } from './with-mui-theme';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <TabManagement />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
