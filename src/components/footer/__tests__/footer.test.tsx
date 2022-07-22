import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../index';
import { expect, test } from 'vitest';

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
}

test('Footer renders', () => {
  const component = renderer.create(<Footer />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
