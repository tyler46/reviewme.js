fs = require "fs"
{exec} = require "child_process"


coffee_src = "./scripts"
js_dst = "extension/app"


task "compile:coffee", "Compile all *.coffee files to javascript files under #{coffee_src}.", (options) ->
    exec "coffee --compile --bare #{coffee_src}", (err, stdout, stderr) ->
        throw err if err
        console.log stdout + stderr
        console.log "Your coffee is served. Enjoy!"

task "compile", "Compiles all source files into js files ..", (options) ->
   invoke "compile:coffee"

task "watch:coffee", "watch and compile changes in #{coffee_src}.", (options) ->
    watch = exec "coffee --watch --compile --bare #{coffee_src}", (err, stdout, stderr) ->
        throw err if err
        console.log stdout + stderr
        watch.stdout.on "data", (data) ->
            stdout.write data
