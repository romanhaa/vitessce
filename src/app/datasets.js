const urlPrefix = 'https://localhost/singlecelldata'

/* eslint-disable object-property-newline */
/* eslint-disable object-curly-newline */
// Note that the ordering of the components in the staticLayout
// can affect the z-index of plot tooltips due to the
// resulting ordering of elements in the DOM.
const configs = {
  'es_0-patient_0': {
    name: 'es_0-patient_0',
    version: '1.0.0',
    description: 'es_0-patient_0',
    public: true,
    datasets: [
      {
        uid: 'es_0-patient_0',
        name: 'es_0-patient_0',
        files: [
          {
            type: 'cells',
            fileType: 'anndata-cells.zarr',
            url: `${urlPrefix}/studies/es_0/patient_0.zarr`,
            options: {
              mappings: {
                PCA: {
                  key: "obsm/X_pca",
                  dims: [ 0, 1]
                },
                UMAP: {
                  key: "obsm/X_umap",
                  dims: [ 0, 1]
                }
              },
              factors: [
                "obs/leiden"
              ]
            },
          },
          {
            type: 'cell-sets',
            fileType: 'anndata-cell-sets.zarr',
            url: `${urlPrefix}/studies/es_0/patient_0.zarr`,
            options: [
              {
                groupName: "Leiden",
                setName: "obs/leiden"
              }
            ]
          },
          {
            type: 'expression-matrix',
            fileType: 'anndata-expression-matrix.zarr',
            url: `${urlPrefix}/studies/es_0/patient_0.zarr`,
            options: {
              matrix: "X"
            }
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        UMAP: 0.75,
      },
      embeddingType: {
        UMAP: 'UMAP',
      },
    },
    layout: [
      {
        component: 'description',
        x: 0, y: 0, w: 3, h: 1 },
      { component: 'cellSets',
        x: 0, y: 2, w: 3, h: 4 },
      { component: 'status',
        x: 0, y: 4, w: 3, h: 1 },
      { component: 'scatterplot',
        coordinationScopes: {
          embeddingType: 'UMAP',
          embeddingZoom: 'UMAP',
        },
        x: 3, y: 0, w: 6, h: 4 },
      { component: 'genes',
        x: 9, y: 0, w: 3, h: 4 },
      { component: 'expressionHistogram',
        x: 9, y: 4, w: 3, h: 2 },
      { component: 'cellSetExpression',
        x: 3, y: 4, w: 6, h: 2 },
    ],
  },
  'pbmc': {
    name: 'pbmc',
    version: '1.0.0',
    description: 'pbmc',
    public: true,
    datasets: [
      {
        uid: 'pbmc',
        name: 'pbmc',
        files: [
          {
            type: 'cells',
            fileType: 'anndata-cells.zarr',
            url: `${urlPrefix}/pbmc.zarr`,
            options: {
              mappings: {
                PCA: {
                  key: "obsm/X_pca",
                  dims: [ 0, 1]
                },
                UMAP: {
                  key: "obsm/X_umap",
                  dims: [ 0, 1]
                }
              },
              factors: [
                "obs/leiden"
              ]
            },
          },
          {
            type: 'cell-sets',
            fileType: 'anndata-cell-sets.zarr',
            url: `${urlPrefix}/pbmc.zarr`,
            options: [
              {
                groupName: "Leiden",
                setName: "obs/leiden"
              }
            ]
          },
          {
            type: 'expression-matrix',
            fileType: 'anndata-expression-matrix.zarr',
            url: `${urlPrefix}/pbmc.zarr`,
            options: {
              matrix: "X"
            }
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        UMAP: 0.75,
      },
      embeddingType: {
        UMAP: 'UMAP',
      },
    },
    layout: [
      {
        component: 'description',
        x: 0, y: 0, w: 3, h: 1 },
      { component: 'cellSets',
        x: 0, y: 2, w: 3, h: 4 },
      { component: 'status',
        x: 0, y: 4, w: 3, h: 1 },
      { component: 'scatterplot',
        coordinationScopes: {
          embeddingType: 'UMAP',
          embeddingZoom: 'UMAP',
        },
        x: 3, y: 0, w: 6, h: 4 },
      { component: 'genes',
        x: 9, y: 0, w: 3, h: 4 },
      { component: 'expressionHistogram',
        x: 9, y: 4, w: 3, h: 2 },
      { component: 'cellSetExpression',
        x: 3, y: 4, w: 6, h: 2 },
    ],
  },
  'tabula-muris': {
    name: 'tabula-muris',
    version: '1.0.0',
    description: 'tabula-muris',
    public: true,
    datasets: [
      {
        uid: 'tabula-muris',
        name: 'tabula-muris',
        files: [
          {
            type: 'cells',
            fileType: 'anndata-cells.zarr',
            url: `${urlPrefix}/tabula-muris.zarr`,
            options: {
              mappings: {
                PCA: {
                  key: "obsm/X_pca",
                  dims: [ 0, 1]
                },
                TSNE: {
                  key: "obsm/X_tsne",
                  dims: [ 0, 1]
                },
                UMAP: {
                  key: "obsm/X_umap",
                  dims: [ 0, 1]
                }
              },
              factors: [
                "obs/clusters_leiden",
                "obs/clusters_louvain",
                "obs/clusters_from_manuscript",
                "obs/cell_ontology_class",
                "obs/free_annotation",
                "obs/mouse_id",
                "obs/mouse_sex",
                "obs/tissue",
                "obs/subtissue",
              ]
            },
          },
          {
            type: 'cell-sets',
            fileType: 'anndata-cell-sets.zarr',
            url: `${urlPrefix}/tabula-muris.zarr`,
            options: [
              {
                groupName: "clusters_leiden",
                setName: "obs/clusters_leiden"
              },
              {
                groupName: "clusters_louvain",
                setName: "obs/clusters_louvain"
              },
              {
                groupName: "clusters_from_manuscript",
                setName: "obs/clusters_from_manuscript"
              },
              {
                groupName: "cell_ontology_class",
                setName: "obs/cell_ontology_class"
              },
              {
                groupName: "free_annotation",
                setName: "obs/free_annotation"
              },
              {
                groupName: "mouse_id",
                setName: "obs/mouse_id"
              },
              {
                groupName: "mouse_sex",
                setName: "obs/mouse_sex"
              },
              {
                groupName: "tissue",
                setName: "obs/tissue"
              },
              {
                groupName: "subtissue",
                setName: "obs/subtissue"
              },
            ]
          },
          {
            type: 'expression-matrix',
            fileType: 'anndata-expression-matrix.zarr',
            url: `${urlPrefix}/tabula-muris.zarr`,
            options: {
              matrix: "X"
            }
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        UMAP: 0.75,
      },
      embeddingType: {
        UMAP: 'UMAP',
      },
    },
    layout: [
      {
        component: 'description',
        x: 0, y: 0, w: 3, h: 1 },
      { component: 'cellSets',
        x: 0, y: 2, w: 3, h: 4 },
      { component: 'status',
        x: 0, y: 4, w: 3, h: 1 },
      { component: 'scatterplot',
        coordinationScopes: {
          embeddingType: 'UMAP',
          embeddingZoom: 'UMAP',
        },
        x: 3, y: 0, w: 6, h: 4 },
      { component: 'genes',
        x: 9, y: 0, w: 3, h: 4 },
      { component: 'expressionHistogram',
        x: 9, y: 4, w: 3, h: 2 },
      { component: 'cellSetExpression',
        x: 3, y: 4, w: 6, h: 2 },
    ],
  },
  'linnarsson': {
    name: 'linnarsson',
    version: '1.0.0',
    description: 'Spatial organization of the somatosensory cortex revealed by cyclic smFISH',
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
  'linnarssson-modified': {
    name: 'linnarssson-modified',
    version: '1.0.0',
    description: 'Spatial organization of the somatosensory cortex revealed by cyclic smFISH',
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
        TSNE: 0.75,
      },
      embeddingType: {
        TSNE: 't-SNE',
      },
    },
    layout: [
      {
        component: 'description',
        x: 0, y: 0, w: 3, h: 1 },
      { component: 'cellSets',
        x: 0, y: 2, w: 3, h: 4 },
      { component: 'status',
        x: 0, y: 4, w: 3, h: 1 },
      { component: 'scatterplot',
        coordinationScopes: {
          embeddingType: 'TSNE',
          embeddingZoom: 'TSNE',
        },
        x: 3, y: 0, w: 6, h: 4 },
      { component: 'genes',
        x: 9, y: 0, w: 3, h: 4 },
      { component: 'expressionHistogram',
        x: 9, y: 4, w: 3, h: 2 },
      { component: 'cellSetExpression',
        x: 3, y: 4, w: 6, h: 2 },
    ],
  },
};
/* eslint-enable */

export default configs;
