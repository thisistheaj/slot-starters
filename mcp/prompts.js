export const prompts = {
  hello_world_2: {
    description: 'A simple prompt that says hello.',
    arguments: [],
    messages: [{
        role: 'assistant',
        content: {
            type: 'text',
            text: 'Hello, world!'
        }
    }]
  },

  suggest_template: {
    description: 'Get personalized starter template suggestions',
    arguments: [
      // 'requirements', 'experience_level', 'project_type'
    ],
    messages: [
      // {
      //   role: 'system',
      //   content: {
      //     type: 'text',
      //     text: 'You are a helpful assistant that suggests starter templates based on user requirements.'
      //   }
      // },
      // {
      //   role: 'user',
      //   content: {
      //     type: 'text',
      //     text: 'I need a template for {{project_type}}. I\'m a {{experience_level}} developer. Requirements: {{requirements}}'
      //   }
      // }
    ]
  },
  
  compare_templates: {
    description: 'Compare multiple starter templates',
    arguments: [
      // 'template_ids'
    ],
    messages: [
      // {
      //   role: 'system',
      //   content: {
      //     type: 'text',
      //     text: 'You will compare the following starter templates and highlight their differences.'
      //   }
      // }
    ]
  }
}; 