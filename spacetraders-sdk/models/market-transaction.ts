/* tslint:disable */
/* eslint-disable */
/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Result of a transaction with a market.
 * @export
 * @interface MarketTransaction
 */
export interface MarketTransaction {
    /**
     * The symbol of the waypoint.
     * @type {string}
     * @memberof MarketTransaction
     */
    'waypointSymbol': string;
    /**
     * The symbol of the ship that made the transaction.
     * @type {string}
     * @memberof MarketTransaction
     */
    'shipSymbol': string;
    /**
     * The symbol of the trade good.
     * @type {string}
     * @memberof MarketTransaction
     */
    'tradeSymbol': string;
    /**
     * The type of transaction.
     * @type {string}
     * @memberof MarketTransaction
     */
    'type': MarketTransactionTypeEnum;
    /**
     * The number of units of the transaction.
     * @type {number}
     * @memberof MarketTransaction
     */
    'units': number;
    /**
     * The price per unit of the transaction.
     * @type {number}
     * @memberof MarketTransaction
     */
    'pricePerUnit': number;
    /**
     * The total price of the transaction.
     * @type {number}
     * @memberof MarketTransaction
     */
    'totalPrice': number;
    /**
     * The timestamp of the transaction.
     * @type {string}
     * @memberof MarketTransaction
     */
    'timestamp': string;
}

export const MarketTransactionTypeEnum = {
    Purchase: 'PURCHASE',
    Sell: 'SELL'
} as const;

export type MarketTransactionTypeEnum = typeof MarketTransactionTypeEnum[keyof typeof MarketTransactionTypeEnum];


