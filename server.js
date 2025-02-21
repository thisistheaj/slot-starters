import { MCP } from 'mcp-js-server';
import { tools } from './mcp/tools.js';
import { prompts } from './mcp/prompts.js';
import { resources } from './mcp/resources.js';

const infos = {
    name: 'slot-starters-mcp',
    version: '1.0.0'
};

const server = new MCP(infos, prompts, resources, tools); 