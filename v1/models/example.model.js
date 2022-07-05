const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;

const exampleSchema = new SCHEMA({
    status: {
        type: String,
        trim: true,
        default: 'active',
        match: /^(active|inactive)$/
    },
    identity: {
        email: {
            type: String,
            trim: true,
            default: null
        },
        firstname: {
            type: String,
            trim: true,
            default: null
        },
        year: {
            type: Number,
            default: 1970,
            required: true
        }
    },
    metadata: {
        url: {
            type: String,
            trim: true,
            default: null
        }
    },
    avatar: {
        url: {
            type: String,
            trim: true,
            default: '/img/default-avatar.png'
        }
    },
    pictures: [{
        storage_id: {
            type: String,
            trim: true,
            default: null
        },
        url: {
            type: String,
            trim: true,
            default: null
        }
    }],
    author: {
        type: SCHEMA.Types.ObjectId,
        ref: 'User',
        index: true
    },
    services: [{
        type: SCHEMA.Types.ObjectId,
        ref: 'Service'
    }],
    deleted: {
        type: Boolean,
        default: false,
        index: true
    }
}, {timestamps: true, versionKey: false});

module.exports = MONGOOSE.model('Example', exampleSchema);