import * as babel from '@babel/core';

test('preset is configured correctly', () => {
  const { code } = babel.transformSync('var foo;', {
    'presets': [
      './'
    ]
  });

  expect(code).toBeTruthy();
});
