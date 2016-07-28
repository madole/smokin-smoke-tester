export const INGEST_DATA = 'INGEST_DATA';
export const DELETE_DATASET = 'DELETE_DATASET';

export function ingestData(dataset) {
  return {
    type: INGEST_DATA,
    dataset
  };
}

export function deleteDataset() {
  return {
    type: DELETE_DATASET
  };
}
