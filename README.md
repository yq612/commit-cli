
# commit-cli

commit-cli 是一个简洁、高效的Git 提交命令行工具，旨在帮助开发团队简化 Git 提交过程，规范提交信息格式，并自动执行常见的 Git 操作。

----

## 功能
- **常见提交类型**：支持 feat、fix、docs、style、refactor、test、chore 等类型。
- **交互式界面**：通过提示帮助快速选择提交类型并填写信息。
- **自动化操作**：自动执行 `git add .` 和 `git commit`，减少重复操作。
- **命令缩写**：支持简写命令（如 commit、ci、c）触发提交。
- **自定义扩展**：支持自定义提交类型，适应不同需求。

## 安装

- 通过 npm 安装
```bash
npm install -g commit-cli
```
- 通过 Yarn 安装
```bash
yarn global add commit-cli
```

## 使用
```bash
gc commit
```

然后根据提示选择提交类型、范围和描述信息。提交完成后，git add . 和 git commit 将自动执行。

## 相关说明

#### 在提交过程中，你将看到以下类型的选择：
- ✨ feat: 新功能
- 🐛 fix: 修复
- 📝 docs: 文档
- 🎨 style: 代码格式
- ♻️ refactor: 重构
- ✅ test: 测试
- 🔧 chore: 杂项
- 
每种提交类型都有对应的 emoji 和描述，帮助你更直观地理解每种类型的用途。

#### 自定义缩写命令
```txt
commit-cli 支持多个缩写命令来触发提交操作。你可以使用以下任意命令来启动提交：
commit-cli commit      # 完整命令
commit-cli com         # 缩写命令
commit-cli c           # 更简短的缩写命令
```

#### 为什么提交完成后自动执行 git add .？

commit-cli 通过自动执行 git add . 和 git commit 来减少重复操作，让开发人员专注于代码和提交信息的编写。

----

License

MIT License. See LICENSE for more information.
