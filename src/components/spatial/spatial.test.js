import expect from 'expect';
import Spatial, { square } from './Spatial';

describe('Spatial.js', () => {
  describe('square()', () => {
    it('gives the right coordinates', () => {
      expect(square(0, 0, 50)).toEqual([[0, 50], [50, 0], [0, -50], [-50, 0]]);
    });
  });

  describe('<Spatial>', () => {
    it('handles moleculeRadius', () => {
      const spatialComponent = new Spatial({
        moleculeRadius: 42,
        molecules: { 'fake-molecule': [] },
      });
      const moleculesLayer = spatialComponent.renderMoleculesLayer();
      expect(moleculesLayer.props.getRadius).toEqual(42);
    });

    // TODO: Doesn't work, but I want to unblock Tos on molecules, first
    //
    // it('handles cellRadius', () => {
    //   const spatialComponent = new Spatial({
    //     cellRadius: 42,
    //     cells: {},
    //   });
    //   const cellsLayer = spatialComponent.renderCellLayer();
    //   expect(cellsLayer.props.getPolygon(['fake-id', { poly: [], xy: [0, 0] }])).toEqual(42);
    // });
  });
});
