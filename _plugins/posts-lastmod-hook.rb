
#!/usr/bin/env ruby
#
# Check for changed posts

Jekyll::Hooks.register :posts, :post_init do |post|

  commit_num = `git rev-list --count HEAD "#{ post.path }"`

  if commit_num.to_i > 1
    lastmod_date = `git log -1 --pretty="%ad" --date=iso "#{ post.path }"`
    post.data['last_modified_at'] = lastmod_date
  end

end


# module Jekyll
#   module Converters
#     class Markdown::CommonMark < Markdown::CommonMark
#       def initialize(config)
#         super(config)

#         # CommonMark의 설정을 변경할 수 있습니다.
#         @config['commonmark'] ||= {}
#         @config['commonmark']['options'] ||= {}
#         @config['commonmark']['options']['sourcepos'] = true
#         @config['commonmark']['extensions'] = ['table', 'strikethrough', 'autolink']
#       end
#     end
#   end
# end