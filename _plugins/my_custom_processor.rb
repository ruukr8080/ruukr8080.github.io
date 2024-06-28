# _plugins/my_custom_processor.rb
module Jekyll
    module Converters
      module Markdown
        class MyCustomProcessor
          def initialize(config)
            require Kramdown
            @config = config
          rescue LoadError
            STDERR.puts 'You are missing a library required for Markdown. Please run:'
            STDERR.puts '  $ [sudo] gem install funky_markdown'
            raise FatalException.new("Missing dependency: funky_markdown")
        rescue => e
            STDERR.puts "An error occurred while initializing MyCustomProcessor: #{e.message}"
            raise FatalException.new("Error initializing MyCustomProcessor")
        end
          
  
          def convert(content)
            ::Kramdown.new(content).convert
          end
        end
      end
    end
  end