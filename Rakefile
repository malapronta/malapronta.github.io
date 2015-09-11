require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"

# git remote set-url origin git@github.com:#malapronta/malapronta.github.io.git"
# git remote set-url origin https://github.com/malapronta/malapronta.github.io.git"
GITHUB_REPONAME = "malapronta/malapronta.github.io"

namespace :site do
  desc "Generate blog files"
  task :generate do
    Jekyll::Site.new(Jekyll.configuration({
      "source" => "_source",
      "destination" => "_site",
      "config" => "_config.yml"
    })).process
  end

  desc "Generate and publish blog to gh-pages"
  task :publish => [:generate] do
    Dir.mktmpdir do |tmp|
      cp_r "_site/.", tmp
      Dir.chdir tmp
      system "git init"
      system "git add ."
      message = "Site updated at #{Time.now.utc}"
      system "git commit -m #{message.inspect}"
      system "git remote add origin https://github.com/#{GITHUB_REPONAME}.git"
      # system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
      system "git push origin master:refs/heads/master --force"
    end
  end
end
