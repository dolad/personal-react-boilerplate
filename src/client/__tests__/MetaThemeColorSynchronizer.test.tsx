import { render } from '../../../testUtils';
import { MetaThemeColorSynchronizer } from '../components/MetaThemeColorSynchronizer';

/**
 * currently only a smoketest
 * next/head or rather generally all <head> elements are invisible for RTL
 */
describe('<MetaThemeColorSynchronizer />', () => {
  it('renders without crashing', () => {
    render(<MetaThemeColorSynchronizer />);
  });
});
