'use strict';

const Util = require('../util/Util');

/**
 * Represents a Discord voice region for guilds.
 */
class VoiceRegion {
  constructor(data) {
    /**
     * The region's id
     * @type {string}
     */
    this.id = data.id;

    /**
     * Name of the region
     * @type {string}
     */
    this.name = data.name;

    /**
     * Whether the region is VIP-only
     * @type {boolean}
     * @deprecated This property is no longer being sent by the API.
     */
    this.vip = data.vip;

    /**
     * Whether the region is deprecated
     * @type {boolean}
     */
    this.deprecated = data.deprecated;

    /**
     * Whether the region is optimal
     * @type {boolean}
     */
    this.optimal = data.optimal;

    /**
     * Whether the region is custom
     * @type {boolean}
     */
    this.custom = data.custom;
  }

  toJSON() {
    return Util.flatten(this);
  }
}

module.exports = VoiceRegion;
