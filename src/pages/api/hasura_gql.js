import { gql } from "@apollo/client";

export const GET_GEN_3 = gql(`
    query MyQuery {
        collection {
            id        
            collection_name
            loadtime
            bb_header_description
            collection_total
            price_refresh_rate
            collection_refresh_rate
            sales_refresh_rate
            collection_est_on
            rarity_on
            attribute_plus_include
            verified
            featured
            description_muilti
            hidden
            collect_category_id
        }
    }
`)

export const GET_COLLECTIONADD = gql(`
    query MyQuery {
        collect_category {
            id        
            category_name
        }
        chain {
            id        
            chain_name
            chain_id
            covalent_chain
            explorer_url
        }
        create_template {
            id
            create_template_name
            blackbook_header_description
            blackbook_buyer_fee_basis_points
            blackbook_seller_fee_basis_points
            blackbook_seller_fee_flat
            blackbook_fee_cap
            blackbook_seller_fee_cap
            blackbook_dev_buyer_basis_fee
            blackbook_dev_seller_basis_fee
            collection_total
            collection_complete
            collection_est_on
            collection_rarity_on
            attribute_plus_include
            collection_verified
            collection_description_muilti
            token_count_without_attribute
            price_refresh_rate
            collection_refresh_rate
            sales_refresh_rate
            collection_category
        }
    }
`);

export const GET_PROTOCOL = gql(`
    query MyQuery {
        protocol {
            id        
            protocol_name
        }
        payment_tokens {
            id
            coin_name
            coingecko_id
            symbol
            opensea_id
            image_url
            chain_id
            decimals
        }
        collect_category {
            id        
            category_name
        }
        marketplace {
            id        
            mp_name
        }
        trans_type {
            id        
            trans_type
        }
        user_social {
            id        
            social_content
        }
        chain {
            id        
            chain_name
            chain_id
            covalent_chain
            explorer_url
        }
    }
`);

export const GET_BOOST  = gql(`
    query MyQuery {
        boost {
            id
            description
            cost
            time
        }
        sponsor_ad {
            id
            ad_name
            token_id
            boost
            sponsor_start
            sponsor_end
            appear
            click_through
            sold
            bb_low
            bb_high
            sale_price
            bb_avg
            referred_user
        }
    }
`)

export const GET_ATT = gql(`
    query MyQuery($collectionId : Int!) {
        attribute(where: {collection_id: {_eq: $collectionId}}) {
            id
            collection_id
            trait_type
            attribute_plus
            attribute_rarity_include
            attribute_name
            rarity_rank_page
            rarity_stats_page
            order
            primary_attribute
            attribute_occurrance
            attribute_occurrance_est
        }
    }
`)

export const GET_TRAITVALUE = gql(`
    query MyQuery{
        trait_value{
            id
            attribute_id
            trait_value_name
            trait_value_rank
            trait_value_plus
            trait_value_include
            order
            trait_value_occurrance
            trait_value_occurrance_est
        }
        attribute{
            id
            collection_id
            trait_type
            attribute_plus
            attribute_rarity_include
            attribute_name
            rarity_rank_page
            rarity_stats_page
            order
            primary_attribute
            attribute_occurrance
            attribute_occurrance_est
        }
    }
`)

export const GET_RARITYCALC = gql(`
    query MyQuery{
        rarity_calc {
            id
            rarity_calc_name
            rarity_calc_desc
            rarity_calc_order
            normalization
            weighted_rarity
            group_rarity
            add_group
            rarity_calculation
        }
    }
`)

export const GET_RARITYOPTION = gql(`
    query MyQuery{
        rarity_option {
            id
            project_id
            rarity_calc_id
            rarity_option_name
            description
            attribute_max_score
            attribute_min_score
            visible
            rarity_default
            rarity_option_order
        }
    }
`)

// export const Create_Contract = gql(`
//     mutation MyMutation($banner_image_url: String!,$created_date: Timestamp!, $featured: Boolean!, $featured_image_url: String!, $hidden: Boolean!, $safelist_request_status: String!, $is_subject_to_whitelist: Boolean, $large_image_url: String!, $collection_name: String!, $require_email: String!, $short_description: String!, $slug: String!, $address: String!, $asset_contract_type: String!, $contract_name: String!, $nft_version: String!, $opensea_version: String!, $owner: String!, $schema_name: String!, $symbol: String!, $total_supply: Int!, $description: String!, $external_link: String!, $image_url: String!, $default_to_fiat: Boolean!, $dev_buyer_fee_basis_points: Int!, )
// `)

export const Create_Template = gql(`
    mutation MyMutation($templateName: String!, $headerDescription: String!, $buyerFeePoints: Int!, $sellerFeePoints: Int!, $sellerFeeFlat: Int!, $feeCap: Boolean!, $sellerFeeCap: Int!, $devBuyerFee:Int!, $devSellerFee: Int!, $collectionTotal: Int!, $collectionComplete: Boolean!, $collectionEstOn: Boolean!,$collectionRarityOn: Boolean!, $collectionVerified: Boolean!, $collectionDescriptionMuilti: Boolean!, $attributePlusInclude: Boolean!, $tokenCountWithoutAttribute: Int!, $priceRefreshRate: Int!, $collectionRefreshRate: Int!, $salesRefreshRate: Int!, $category: String!){
        insert_create_template(objects: { create_template_name : $templateName, blackbook_header_description : $headerDescription, blackbook_buyer_fee_basis_points : $buyerFeePoints, blackbook_seller_fee_basis_points : $sellerFeePoints, blackbook_seller_fee_flat : $sellerFeeFlat, blackbook_fee_cap : $feeCap, blackbook_seller_fee_cap : $sellerFeeCap, blackbook_dev_buyer_basis_fee : $devBuyerFee, blackbook_dev_seller_basis_fee : $devSellerFee, collection_total : $collectionTotal, collection_complete : $collectionComplete, collection_est_on : $collectionEstOn, collection_rarity_on : $collectionRarityOn, collection_verified : $collectionVerified, collection_description_muilti : $collectionDescriptionMuilti, token_count_without_attribute : $tokenCountWithoutAttribute, attribute_plus_include : $attributePlusInclude, price_refresh_rate : $priceRefreshRate, collection_refresh_rate : $collectionRefreshRate, sales_refresh_rate : $salesRefreshRate, collection_category : $category}){
            returning{
                id
                blackbook_buyer_fee_basis_points
            }
        }
    }
`)

export const Create_Boost = gql(`
    mutation MyMutation($adBoostName: String!, $cost: Int!, $time: timestamp!){
        insert_boost(objects: { description : $adBoostName, cost : $cost, time : $time}){
            returning{
                id
                description
            }
        }
    }
`)

export const Create_Protocol = gql(`
    mutation MyMutation($protocolName: String!){
        insert_protocol(objects: { protocol_name : $protocolName}){
            returning{
                id
                protocol_name
            }
        }
    }
`)

export const Create_Payment = gql(`
    mutation MyMutation($coinName: String!, $coinGeckoId: String!, $symbol: String!, $openseaId: Int!, $imageUrl: String!, $paymentChainId: String!, $decimals: Int!){
        insert_payment_tokens(objects: { coin_name : $coinName, coingecko_id : $coinGeckoId, symbol : $symbol, opensea_id : $openseaId, image_url : $imageUrl, chain_id : $paymentChainId, decimals : $decimals}){
            returning{
                id
                coin_name
            }
        }
    }
`)

export const Create_Category = gql(`
    mutation MyMutation($categoryName: String!){
        insert_collect_category(objects: { category_name : $categoryName}){
            returning{
                id
                category_name
            }
        }
    }
`)

export const Create_Marketplace = gql(`
    mutation MyMutation($marketplaceName: String!){
        insert_marketplace(objects: { mp_name : $marketplaceName}){
            returning{
                id
                mp_name
            }
        }
    }
`)

export const Create_TransactionType = gql(`
    mutation MyMutation($transactionTypeName: String!){
        insert_trans_type(objects: { trans_type : $transactionTypeName}){
            returning{
                id
                trans_type
            }
        }
    }
`)

export const Create_Social = gql(`
    mutation MyMutation($socialName: String!){
        insert_user_social(objects: { social_content : $socialName}){
            returning{
                id
                social_content
            }
        }
    }
`)

export const Create_Chain = gql(`
    mutation MyMutation($chainName: String!, $chainId: Int!, $covalentChain: Int!, $explorerUrl: String!){
        insert_chain(objects: { chain_name : $chainName, chain_id : $chainId, covalent_chain : $covalentChain, explorer_url : $explorerUrl}){
            returning{
                id
                chain_name
            }
        }
    }
`)

export const Create_RarityCalculation = gql(`
    mutation MyMutation($rarity_calc_name : String!, $rarity_calc_desc : String!, $order : Int!, $normalization : Boolean!, $weighted_rarity : Boolean!, $group_rarity : Boolean!, $add_group : Boolean!, $rarity_calculation : String!){
        insert_rarity_calc(objects: { rarity_calc_name : $rarity_calc_name, rarity_calc_desc : $rarity_calc_desc, rarity_calc_order : $order, normalization : $normalization, weighted_rarity : $weighted_rarity, group_rarity : $group_rarity, add_group : $add_group, rarity_calculation : $rarity_calculation}){
            returning{
                id
                rarity_calc_name
            }
        }
    }
`)

export const Create_RarityOption = gql(`
    mutation MyMutation($name : String!, $description : String!){
        insert_rarity_option(objects: { rarity_option_name : $name, description : $description}){
            returning{
                id
                rarity_option_name
                description
            }
        }
    }
`)

export const Create_Attribute = gql(`
    mutation MyMutation($primaryAttribute : Boolean!, $rarityInclude : Boolean!, $name : String!){
        insert_attribute(objects: { primary_attribute : $primaryAttribute, attribute_rarity_include : $rarityInclude, attribute_name : $name}){
            returning{
                id
                attribute_name
            }
        }
    }
`)

export const Create_TraitValue = gql(`
    mutation MyMutation($name : String!, $attributeId : Int!, $order : Int!){
        insert_trait_value(objects: {trait_value_name : $name, attribute_id : $attributeId, order : $order, trait_value_plus : true}){
            returning{
                id
                trait_value_name
            }
        }
    }
`)

export const Delete_Create_Template = gql(`
    mutation MyMutation($category: String!) {
        delete_create_template(where: {collection_category: {_eq: $category}}){
            returning{
                id
            }
        }
    }
`)

export const Delete_Protocol = gql(`
    mutation MyMutation($protocolId : Int!) {
        delete_protocol(where: {id: {_eq: $protocolId}}){
            returning{
                id
            }
        }
    }
`)

export const Delete_Payment = gql(`
    mutation MyMutation($paymentId : Int!) {
        delete_payment_tokens(where: {id: {_eq: $paymentId}}){
            returning{
                id
            }
        }
    }
`)
export const Delete_Category = gql(`
    mutation MyMutation($categoryId : Int!) {
        delete_collect_category(where: {id: {_eq: $categoryId}}){
            returning{
                id
            }
        }
    }
`)
export const Delete_Marketplace = gql(`
    mutation MyMutation($marketplaceId : Int!) {
        delete_marketplace(where: {id: {_eq: $marketplaceId}}){
            returning{
                id
            }
        }
    }
`)
export const Delete_Transaction = gql(`
    mutation MyMutation($transId : Int!) {
        delete_trans_type(where: {id: {_eq: $transId}}){
            returning{
                id
            }
        }
    }
`)
export const Delete_Social = gql(`
    mutation MyMutation($socialId : Int!) {
        delete_user_social(where: {id: {_eq: $socialId}}){
            returning{
                id
            }
        }
    }
`)
export const Delete_Chain = gql(`
    mutation MyMutation($chainDataId : Int!) {
        delete_chain(where: {id: {_eq: $chainDataId}}){
            returning{
                id
            }
        }
    }
`)
export const Delete_Attribute = gql(`
    mutation MyMutation($attributeId : Int!) {
        delete_attribute(where: {id: {_eq: $attributeId}}){
            returning{
                id
            }
        }
    }
`)
export const Delete_TraitValue = gql(`
    mutation MyMutation($traitValueId : Int!) {
        delete_trait_value(where: {id: {_eq: $traitValueId}}){
            returning{
                id
            }
        }
    }
`)

export const Update_TraitValue = gql(`
    mutation MyMutation($id: Int!, $order: Int!){
        update_trait_value(where: {id: {_eq : $id}}, _set: {order : $order}) {
            returning{
                id
            }
        }
    }
`)

export const Update_TraitValueAttributeId = gql(`
    mutation MyMutation($id: Int!, $attribute_id: Int!, $order: Int!){
        update_trait_value(where: {id: {_eq : $id}}, _set: {attribute_id : $attribute_id, order : $order}) {
            returning{
                id
                attribute_id
            }
        }
    }
`)

export const Update_TraitValueOrder = gql(`
    mutation MyMutation($id: Int!, $order: Int!){
        update_trait_value(where: {id: {_eq : $id}}, _set: {order : $order}) {
            returning{
                id
            }
        }
    }
`)

export const Update_Collection = gql(`
    mutation MyMutation($collection_name: String!, $loadTime : timestamp!, $bbHeaderDescription : String!, $collectionTotal: Int!, $priceRate: Int!, $collectionRate: Int!, $salesRate: Int!, $collectionEstOn: Boolean!, $collectionRarityOn: Boolean!, $attributePlusInclude: Boolean!, $collectionVerified: Boolean!, $collectionFeatured: Boolean!, $collectionDescriptionMuilti: Boolean!, $hidden: Boolean!) {
        update_collection(where: {collection_name: {_eq: $collection_name}}, _set: {loadtime: $loadTime, bb_header_description: $bbHeaderDescription, collection_total: $collectionTotal, price_refresh_rate: $priceRate, collection_refresh_rate: $collectionRate, sales_refresh_rate: $salesRate, collection_est_on: $collectionEstOn, rarity_on : $collectionRarityOn, attribute_plus_include : $attributePlusInclude, verified : $collectionVerified, featured : $collectionFeatured, description_muilti : $collectionDescriptionMuilti, hidden : $hidden}) {
            returning{
                id
            }
        }
    }
`)

export const Create_Contract = gql(`
    mutation MyMutation($banner_image_url : String!, $created_date : timestamp!, $featured : Boolean!, $featured_image_url: String!, $hidden: Boolean!, $safelist_request_status: String!, $is_subject_to_whitelist: Boolean!, $large_image_url: String!, $collection_name: String!, $require_email: Boolean!, $short_description: String!, $slug: String!, $address: String!, $asset_contract_type: String!, $contract_name: String!, $nft_version: String!, $opensea_version: String!, $owner: String!, $schema_name: String!, $symbol: String!, $total_supply: Int!, $description: String!, $external_link: String!, $image_url: String!, $default_to_fiat: Boolean!, $dev_buyer_fee_basis_points: Int!, $dev_seller_fee_basis_points: Int!, $only_proxied_transfers: Boolean!, $opensea_buyer_fee_basis_points: Int!, $opensea_seller_fee_basis_points: Int!, $buyer_fee_basis_points: Int!, $seller_fee_basis_points: Int!) {
        insert_contract(objects: {banner_image_url: $banner_image_url, created_date: $created_date, featured: $featured, featured_image_url: $featured_image_url, hidden: $hidden, safelist_request_status: $safelist_request_status, is_subject_to_whitelist: $is_subject_to_whitelist, large_image_url: $large_image_url, collection_name: $collection_name, require_email: $require_email, short_description: $short_description, slug: $slug, address: $address, asset_contract_type: $asset_contract_type, contract_name: $contract_name, nft_version: $nft_version, opensea_version: $opensea_version, owner: $owner, schema_name: $schema_name, symbol: $symbol, total_supply: $total_supply, description: $description, external_link: $external_link, image_url: $image_url, default_to_fiat: $default_to_fiat, dev_buyer_fee_basis_points: $dev_buyer_fee_basis_points, dev_seller_fee_basis_points: $dev_seller_fee_basis_points, only_proxied_transfers: $only_proxied_transfers, opensea_buyer_fee_basis_points: $opensea_buyer_fee_basis_points, opensea_seller_fee_basis_points: $opensea_seller_fee_basis_points, buyer_fee_basis_points: $buyer_fee_basis_points, seller_fee_basis_points: $seller_fee_basis_points}) {
            returning{
                id
            }
        }
    }
`)

// export const Update_Contract = gql(`
//     mutation MyMutation($bannerUrl : String!, $linktree : String!, $featuredUrl : String!, $largeUrl: String!, $primaryDescription: String!, $shortDescription: String!, $openseaSlug: String!, $devBuyerFee: Int!, $devSellerFee: Int!, $buyerFeePoints: Int!, $sellerFeePoints: Int!, $fiat: Boolean!, $headerDescription: String!) {
//         update_collection(where: {collection_name: {_eq: "Collection 1"}}, _set: {collection_name: $collection_name, loadtime: $loadTime, bb_header_description: $bbHeaderDescription, collection_total: $collectionTotal, price_refresh_rate: $priceRate, collection_refresh_rate: $collectionRate, sales_refresh_rate: $salesRate, collection_est_on: $collection_est_on}) {
//             returning{
//                 collection_name
//                 loadtime
//                 bb_header_description
//             }
//         }
//     }
// `)

export const Update_RarityCalc = gql(`
    mutation MyMutation($id: Int!, $rarity_calc_name : String!, $rarity_calc_desc : String!, $normalization : Boolean!, $weighted_rarity : Boolean!, $group_rarity : Boolean!, $add_group : Boolean!, $rarity_calculation : String!) {
        update_rarity_calc(where: {id : {_eq : $id}}, _set: { rarity_calc_name : $rarity_calc_name, rarity_calc_desc : $rarity_calc_desc, normalization : $normalization, weighted_rarity : $weighted_rarity, group_rarity : $group_rarity, add_group : $add_group, rarity_calculation : $rarity_calculation }){
            returning{
                id
                rarity_calc_name
            }
        }
    }
`)

export const Update_RarityCalcOrder = gql(`
    mutation MyMutation($id : Int!, $order : Int!) {
        update_rarity_calc(where: {id : {_eq : $id}}, _set : {rarity_calc_order : $order}){
            returning{
                id
                rarity_calc_order
            }
        }
    }
`)

export const Update_RarityOption = gql(`
    mutation MyMutation($id: Int!, $rarity_option_name : String!, $description : String!, $attribute_max_score : Int!, $attribute_min_score : Int!, $visible : Boolean!, $rarity_default : Boolean!) {
        update_rarity_option(where: {id : {_eq : $id}}, _set: { rarity_option_name : $rarity_option_name, description : $description, attribute_max_score : $attribute_max_score, attribute_min_score : $attribute_min_score, visible : $visible, rarity_default : $rarity_default }){
            returning{
                id
                rarity_option_name
            }
        }
    }
`)