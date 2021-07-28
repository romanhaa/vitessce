const urlPrefix = 'https://s3.amazonaws.com/vitessce-data/0.0.31/master_release'

/* eslint-disable object-property-newline */
/* eslint-disable object-curly-newline */
// Note that the ordering of the components in the staticLayout
// can affect the z-index of plot tooltips due to the
// resulting ordering of elements in the DOM.
const configs = {
  'linnarsson': {
    name: 'Linnarsson',
    version: '1.0.0',
    description: 'Linnarsson: Spatial organization of the somatosensory cortex revealed by cyclic smFISH',
    public: true,
    datasets: [
      {
        uid: 'linnarsson-2018',
        name: 'Linnarsson 2018',
        files: [
          {
            type: 'cells',
            fileType: 'cells.json',
            url: `${urlPrefix}/linnarsson/linnarsson.cells.json`,
          },
          {
            type: 'cell-sets',
            fileType: 'cell-sets.json',
            url: `${urlPrefix}/linnarsson/linnarsson.cell-sets.json`,
          },
          {
            type: 'raster',
            fileType: 'raster.json',
            url: `${urlPrefix}/linnarsson/linnarsson.raster.json`,
          },
          {
            type: 'molecules',
            fileType: 'molecules.json',
            url: `${urlPrefix}/linnarsson/linnarsson.molecules.json`,
          },
          {
            type: 'neighborhoods',
            fileType: 'neighborhoods.json',
            url: `${urlPrefix}/linnarsson/linnarsson.neighborhoods.json`,
          },
          {
            type: 'expression-matrix',
            fileType: 'clusters.json',
            url: `${urlPrefix}/linnarsson/linnarsson.clusters.json`,
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        TSNE: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        TSNE: 't-SNE',
      },
      spatialZoom: {
        A: -5.5,
      },
      spatialTargetX: {
        A: 16000,
      },
      spatialTargetY: {
        A: 20000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 4, h: 4 },
      { component: 'genes',
        x: 9, y: 0, w: 3, h: 2 },
      { component: 'cellSets',
        x: 9, y: 3, w: 3, h: 2 },
      { component: 'heatmap',
        props: {
          transpose: true,
        },
        x: 2, y: 4, w: 5, h: 2 },
      { component: 'cellSetExpression',
        x: 7, y: 4, w: 3, h: 2 },
      { component: 'expressionHistogram',
        x: 10, y: 4, w: 2, h: 2 },
      { component: 'scatterplot',
        coordinationScopes: {
          embeddingType: 'PCA',
          embeddingZoom: 'PCA',
        },
        x: 6, y: 0, w: 3, h: 2 },
      { component: 'scatterplot',
        coordinationScopes: {
          embeddingType: 'TSNE',
          embeddingZoom: 'TSNE',
        },
        x: 6, y: 2, w: 3, h: 2 },
    ],
  },
  'dries-2019': {
    name: 'Dries',
    version: '1.0.0',
    description: 'Giotto, a pipeline for integrative analysis and visualization of single-cell spatial transcriptomic data',
    public: true,
    datasets: [
      {
        uid: 'dries-2019',
        name: 'Dries 2019',
        files: [
          {
            type: 'cells',
            fileType: 'cells.json',
            url: `${urlPrefix}/dries/dries.cells.json`,
          },
          {
            type: 'cell-sets',
            fileType: 'cell-sets.json',
            url: `${urlPrefix}/dries/dries.cell-sets.json`,
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingType: {
        TSNE: 't-SNE',
        UMAP: 'UMAP',
      },
      embeddingCellSetPolygonsVisible: {
        A: false,
      },
      embeddingCellSetLabelsVisible: {
        A: true,
      },
      embeddingCellSetLabelSize: {
        A: 16,
      },
      embeddingCellRadius: {
        A: 1,
      },
      embeddingZoom: {
        TSNE: 3,
        UMAP: 3,
      },
      spatialZoom: {
        A: -4.4,
      },
      spatialTargetX: {
        A: 3800,
      },
      spatialTargetY: {
        A: -900,
      },
    },
    layout: [
      { component: 'description',
        x: 9, y: 0, w: 3, h: 2 },
      { component: 'status',
        x: 9, y: 2, w: 3, h: 2 },
      { component: 'cellSets',
        x: 9, y: 4, w: 3, h: 4 },
      { component: 'cellSetSizes',
        x: 5, y: 4, w: 4, h: 4 },
      { component: 'scatterplot',
        coordinationScopes: {
          embeddingType: 'TSNE',
          embeddingZoom: 'TSNE',
          embeddingCellSetLabelsVisible: 'A',
          embeddingCellSetLabelSize: 'A',
          embeddingCellSetPolygonsVisible: 'A',
          embeddingCellRadius: 'A',
        },
        x: 0, y: 2, w: 5, h: 4 },
      { component: 'spatial',
        props: {
          cellRadius: 50,
        },
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 5, y: 0, w: 4, h: 4 },
      { component: 'scatterplot',
        coordinationScopes: {
          embeddingType: 'UMAP',
          embeddingZoom: 'UMAP',
          embeddingCellSetLabelsVisible: 'A',
          embeddingCellSetLabelSize: 'A',
          embeddingCellSetPolygonsVisible: 'A',
          embeddingCellRadius: 'A',
        },
        x: 0, y: 0, w: 5, h: 4 },
    ],
  },
  'wang-2019': {
    name: 'Wang',
    version: '1.0.0',
    description: 'Multiplexed imaging of high-density libraries of RNAs with MERFISH and expansion microscopy',
    public: true,
    datasets: [
      {
        uid: 'wang-2019',
        name: 'Wang 2019',
        files: [
          {
            type: 'cells',
            fileType: 'cells.json',
            url: `${urlPrefix}/wang/wang.cells.json`,
          },
          {
            type: 'molecules',
            fileType: 'molecules.json',
            url: `${urlPrefix}/wang/wang.molecules.json`,
          },
          {
            type: 'expression-matrix',
            fileType: 'genes.json',
            url: `${urlPrefix}/wang/wang.genes.json`,
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      spatialZoom: {
        A: -1,
      },
      spatialLayers: {
        A: [
          {
            type: 'molecules', radius: 2, opacity: 1, visible: true,
          },
          {
            type: 'cells', opacity: 1, radius: 50, visible: true, stroked: false,
          },
        ],
      },
    },
    layout: [
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialLayers: 'A',
        },
        props: {},
        x: 0, y: 0, w: 10, h: 2 },
      { component: 'genes',
        x: 10, y: 0, w: 2, h: 4 },
      { component: 'expressionHistogram',
        x: 0, y: 2, w: 10, h: 2 },
    ],
  },
  vanderbilt: {
    name: 'Spraggins',
    version: '0.1.0',
    description: 'High Bit Depth (uint16) Multiplex Immunofluorescence Imaging',
    public: true,
    layers: [
      {
        name: 'raster',
        type: 'RASTER',
        fileType: 'raster.json',
        url: `${urlPrefix}/spraggins/spraggins.raster.json`,
      },
    ],
    staticLayout: [
      { component: 'spatial',
        props: {
          view: {
            zoom: -6.5,
            target: [20000, 20000, 0],
          },
        },
        x: 0, y: 0, w: 9, h: 2 },
      { component: 'layerController',
        x: 9, y: 0, w: 3, h: 2 },
    ],
  },
};
/* eslint-enable */

export default configs;
