import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/arrowFunctions/error-dup-params.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);