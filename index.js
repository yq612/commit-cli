#!/usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer');
const shell = require('shelljs');

program.version('1.0.0').description('Git Commit CLI Tool');

// 定义 commit 命令
program
    .command('commit')
    .alias('ci')
    .alias('c')
    .description('Auto git add and create a commit message')
    .action(async () => {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'type',
                message: '请选择提交类型:',
                choices: [
                    { name: '✨ feat: 新功能', value: 'feat', description: '用于增加新功能' },
                    { name: '🐛 fix: 修复', value: 'fix', description: '用于修复bug' },
                    { name: '📝 docs: 文档', value: 'docs', description: '仅修改文档' },
                    { name: '🎨 style: 格式', value: 'style', description: '仅修改代码格式，不影响功能' },
                    { name: '🛠️ refactor: 重构', value: 'refactor', description: '代码重构，不影响功能' },
                    { name: '✅ test: 测试', value: 'test', description: '添加或修改测试代码' },
                    { name: '⚙️ chore: 杂项', value: 'chore', description: '构建工具、辅助工具的变动' }
                ]
            },
            {
                type: 'input',
                name: 'scope',
                message: '请输入影响范围（例如文件、模块等）:',
            },
            {
                type: 'input',
                name: 'description',
                message: '请输入简要描述:',
                validate(input) {
                    return input ? true : '描述不能为空';
                },
            },
        ]);

        const { type, scope, description } = answers;
        const commitMessage = `${type}(${scope}): ${description}`;

        // 执行 git add . 和 git commit -m
        if (shell.exec(`git add .`).code !== 0) {
            shell.echo('Error: Git add failed');
            shell.exit(1);
        }

        if (shell.exec(`git commit -m "${commitMessage}"`).code !== 0) {
            shell.echo('Error: Git commit failed');
            shell.exit(1);
        } else {
            shell.echo('Commit completed successfully!');
        }
    });

program.parse(process.argv);