export interface Product {
    id?: string,
    uuid?: string,
    // label?: string,
    // status?: string,
    // createdAt?: string
    // updatedAt?: string
    // create?: string
    // update?: string



    name?: string, 
    description?: string,
    price: number,
    weight: number,
    unit: "Kg",
    size?: string,
    buy_now_or_auction_sales: boolean,
    accept_offers: boolean,
    for_livestream_only: boolean,
    sudden_death: boolean,
    type_id?: string,
    state_id?: string,
    rarity_id?: string,
    profile_id?: string,
    live_ids?: [string],
    subcategory_id?: string,
    created_at?: string,
    updated_at?: string,
    deleted_at?: string

  }
  