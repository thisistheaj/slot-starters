# Building an MCP Server in JavaScript

This guide explains how to implement the Model Context Protocol (MCP) in a JavaScript project. MCP enables AI models to interact with external tools and resources through a standardized protocol.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Initialize a new npm project (if not already done):
```bash
npm init -y
```

2. Install the required dependency:
```bash
npm install mcp-js-server
```

## Project Structure

Create the following files in your project directory:

```
your-project/
├── package.json
├── server.js
├── tools.js
├── resources.js
└── prompts.js
```

## Implementation

### 1. Server Setup (server.js)

```javascript
import { MCP } from 'mcp-js-server';
import { tools } from './tools.js';
import { prompts } from './prompts.js';
import { resources } from './resources.js';

const infos = {
    name: 'mcp-demo-server',
    version: '0.1.0'
};

const server = new MCP(infos, prompts, resources, tools);
```

### 2. Defining Tools (tools.js)

Tools are functions that can be called by the AI model. Each tool has a description, handler function, and schema defining its parameters.

```javascript
export const tools = {
    simple_tool: {
        description: 'A simple tool',
        handler: async () => new Date().toLocaleString(),
        schema: {
            type: 'object',
            properties: {},
            required: []
        }
    },
    complex_tool: {
        description: 'A complex tool',
        handler: async ({ param1, param2 }) => {
            return `param1: ${param1}, param2: ${param2}`;
        },
        schema: {
            type: 'object',
            properties: {
                param1: { type: 'string' },
                param2: { type: 'string' }
            },
            required: ['param1', 'param2']
        }
    }
};
```

### 3. Defining Resources (resources.js)

Resources are external files or data that can be accessed by the AI model.

```javascript
export const resources = {
    apiReference: {
        uri: 'https://docs.cursor.com/llms.txt',
        mimeType: 'text/plain'
    }
};
```

### 4. Defining Prompts (prompts.js)

Prompts are predefined message templates that can be used by the AI model.

```javascript
export const prompts = {
    hello_world: {
        description: 'A simple prompt that says hello.',
        arguments: [],
        messages: [{
            role: 'assistant',
            content: {
                type: 'text',
                text: 'Hello, world!'
            }
        }]
    }
};
```

## Integration Guide

To integrate MCP into an existing JavaScript CLI tool:

1. **Package Configuration**
   - Add `"type": "module"` to your package.json to enable ES modules
   - Install the MCP server dependency:
   ```json
   {
     "dependencies": {
       "mcp-js-server": "^0.1.3"
     }
   }
   ```

2. **Server Integration**
   - Import and initialize the MCP server in your main application file
   - The server will handle the protocol communication with AI models

3. **Tool Implementation**
   - Define tools that expose your CLI functionality
   - Each tool should have:
     - A clear description
     - A handler function
     - A JSON schema defining its parameters
   - Tools can be async and return promises

4. **Resource Management**
   - Define resources for any external files or data
   - Specify URI and MIME type for each resource
   - Resources can be local files or remote URLs

5. **Prompt Templates**
   - Define prompts for common interactions
   - Structure messages with roles and content
   - Use arguments to make prompts dynamic

## Best Practices

1. **Tool Design**
   - Keep tools atomic and focused
   - Use clear descriptions
   - Validate all inputs
   - Handle errors gracefully
   - Return structured data

2. **Resource Management**
   - Use relative paths for local resources
   - Cache external resources when possible
   - Validate resource availability
   - Handle missing resources gracefully

3. **Error Handling**
   - Implement proper error handling in tool handlers
   - Log errors for debugging
   - Return meaningful error messages
   - Handle timeouts and failures

4. **Security**
   - Validate all inputs
   - Sanitize file paths
   - Implement rate limiting if needed
   - Handle permissions appropriately

## Example Usage

Here's how an AI model would interact with your MCP server:

1. **Using Tools**
   ```javascript
   // The AI model can call tools like this:
   const result = await tools.simple_tool();
   const complexResult = await tools.complex_tool({
     param1: "value1",
     param2: "value2"
   });
   ```

2. **Accessing Resources**
   ```javascript
   // The AI model can request resources:
   const apiDocs = await resources.apiReference;
   ```

3. **Using Prompts**
   ```javascript
   // The AI model can use predefined prompts:
   const greeting = await prompts.hello_world;
   ```

## Debugging

For debugging your MCP implementation:

1. Enable debug logging in your server
2. Use the MCP Inspector tool:
   ```bash
   npx @modelcontextprotocol/inspector
   ```
3. Monitor server logs for errors and tool execution
4. Test tools independently before integration

## Additional Resources

- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [MCP JavaScript Server Repository](https://github.com/davlgd/mcp-js-server)
- [MCP Inspector Tool](https://modelcontextprotocol.io/docs/tools/inspector)

## Notes for LLM Integration

When implementing this in an LLM project:

1. The MCP server should be initialized when your application starts
2. Tools should wrap existing CLI functionality
3. Consider adding logging for tool execution
4. Implement proper error handling for AI interactions
5. Use structured responses that the AI can parse
6. Consider adding validation for AI-provided parameters
7. Document tool behavior clearly for the AI model

Remember that the AI model will interact with your tools through the MCP protocol, so clear documentation and structured responses are essential for successful integration. 

## Appendix: Single-File Implementation

Here's a complete example of an MCP server implementation consolidated into a single file (`mcp-server.js`):

```javascript
import { MCP } from 'mcp-js-server';

// Define tools
const tools = {
    // A tool that returns the current time
    getCurrentTime: {
        description: 'Get the current time in the local timezone',
        handler: async () => new Date().toLocaleString(),
        schema: {
            type: 'object',
            properties: {},
            required: []
        }
    },
    
    // A tool that performs text manipulation
    transformText: {
        description: 'Transform text based on specified operations',
        handler: async ({ text, operation }) => {
            switch (operation) {
                case 'uppercase':
                    return text.toUpperCase();
                case 'lowercase':
                    return text.toLowerCase();
                case 'reverse':
                    return text.split('').reverse().join('');
                default:
                    throw new Error(`Unknown operation: ${operation}`);
            }
        },
        schema: {
            type: 'object',
            properties: {
                text: { type: 'string' },
                operation: { 
                    type: 'string',
                    enum: ['uppercase', 'lowercase', 'reverse']
                }
            },
            required: ['text', 'operation']
        }
    },
    
    // A tool that performs calculations
    calculate: {
        description: 'Perform basic mathematical calculations',
        handler: async ({ operation, numbers }) => {
            switch (operation) {
                case 'sum':
                    return numbers.reduce((a, b) => a + b, 0);
                case 'average':
                    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
                case 'max':
                    return Math.max(...numbers);
                case 'min':
                    return Math.min(...numbers);
                default:
                    throw new Error(`Unknown operation: ${operation}`);
            }
        },
        schema: {
            type: 'object',
            properties: {
                operation: {
                    type: 'string',
                    enum: ['sum', 'average', 'max', 'min']
                },
                numbers: {
                    type: 'array',
                    items: { type: 'number' },
                    minItems: 1
                }
            },
            required: ['operation', 'numbers']
        }
    }
};

// Define resources
const resources = {
    documentation: {
        uri: './docs/api.md',
        mimeType: 'text/markdown'
    },
    config: {
        uri: './config.json',
        mimeType: 'application/json'
    }
};

// Define prompts
const prompts = {
    welcomeMessage: {
        description: 'Welcome message with user name',
        arguments: ['userName'],
        messages: [{
            role: 'assistant',
            content: {
                type: 'text',
                text: 'Hello, {userName}! Welcome to the MCP server.'
            }
        }]
    },
    errorResponse: {
        description: 'Standard error response format',
        arguments: ['errorCode', 'errorMessage'],
        messages: [{
            role: 'assistant',
            content: {
                type: 'text',
                text: 'Error {errorCode}: {errorMessage}'
            }
        }]
    }
};

// Server information
const infos = {
    name: 'example-mcp-server',
    version: '1.0.0',
    description: 'Example MCP server with tools, resources, and prompts'
};

// Initialize and start the server
const server = new MCP(infos, prompts, resources, tools);

// Example error handling
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    // Implement proper error handling and logging
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Implement proper error handling and logging
});

// Example usage in an async context:
/*
async function main() {
    try {
        // Example tool calls
        const time = await tools.getCurrentTime();
        console.log('Current time:', time);

        const transformed = await tools.transformText({
            text: 'Hello World',
            operation: 'uppercase'
        });
        console.log('Transformed text:', transformed);

        const result = await tools.calculate({
            operation: 'average',
            numbers: [1, 2, 3, 4, 5]
        });
        console.log('Calculation result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
*/
```

This single-file implementation includes:

1. Complete tool definitions with validation and error handling
2. Resource definitions for documentation and configuration
3. Prompt templates with argument support
4. Server initialization and configuration
5. Basic error handling setup
6. Example usage patterns (commented out)

You can save this as `mcp-server.js` and run it directly with Node.js after installing the required dependency:

```bash
npm install mcp-js-server
node mcp-server.js
```

This consolidated example is particularly useful for:
- Quick prototyping
- Understanding how all components work together
- Testing MCP integration in existing projects
- Learning the MCP implementation pattern

Remember that the AI model will interact with your tools through the MCP protocol, so clear documentation and structured responses are essential for successful integration. 