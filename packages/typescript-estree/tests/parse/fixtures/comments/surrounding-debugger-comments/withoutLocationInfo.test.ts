import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/comments/surrounding-debugger-comments.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);