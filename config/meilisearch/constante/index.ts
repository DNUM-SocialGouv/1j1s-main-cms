
export default class Constante {
  public static readonly LIMITE_MAX_FACETS = 200;
  public static readonly LIMITE_MAX_HITS= 2000;
  public static readonly LIMITE_ENTRIES_QUERY = process.env.MEILISEARCH_BATCH_SIZE;
}
