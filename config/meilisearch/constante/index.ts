
export default class Constante {
  public static readonly LIMITE_MAX_FACETS = 100000;
  public static readonly LIMITE_MAX_HITS= 100000;
  public static readonly LIMITE_ENTRIES_QUERY = process.env.MEILISEARCH_BATCH_SIZE;
}
