# Claude Code 最佳实践指南

## 🎯 高效沟通技巧

### 1. 具体明确的请求
❌ **避免**: "帮我优化代码"
✅ **推荐**: "优化这个React组件的渲染性能，减少不必要的重新渲染"

### 2. 提供充分上下文
❌ **避免**: "修复这个bug"
✅ **推荐**: "修复用户登录时出现的TypeError: Cannot read property 'id' of undefined错误"

### 3. 分步骤处理复杂任务
❌ **避免**: "创建一个完整的电商网站"
✅ **推荐**: 
```
1. 先创建产品列表页面
2. 然后添加购物车功能
3. 最后实现支付流程
```

## 🚀 工作流程优化

### 扩展思考模式的使用时机
- 架构设计决策
- 性能瓶颈分析
- 复杂问题排查
- 代码重构计划

### 会话管理策略
- 重要对话使用 `--continue` 保存
- 定期使用 `--resume` 回顾历史
- 在CLAUDE.md中记录项目特定信息

### 多行输入技巧
```bash
# 方法1: 反斜杠续行
"创建一个用户管理系统，包括：\
- 用户注册和登录\
- 权限管理\
- 个人资料编辑"

# 方法2: Option+Enter (Mac) / Alt+Enter (Windows)
# 可以直接换行输入多行内容
```

## ⚠️ 常见陷阱

### 1. 请求过于简化
**问题**: 缺乏技术细节和约束条件
**解决**: 始终包含技术栈、性能要求、兼容性需求

### 2. 忽略错误信息
**问题**: 不提供完整的错误堆栈
**解决**: 复制完整的错误信息，包括文件路径和行号

### 3. 不验证变更
**问题**: 接受代码修改后不测试
**解决**: 逐步验证每个变更，运行测试确保功能正常

## 🔧 高级技巧

### 代码审查技巧
```bash
"review this code for potential security vulnerabilities"
"analyze this component for React best practices"
"check this API endpoint for error handling completeness"
```

### 性能优化技巧
```bash
"profile this function and suggest optimizations"
"analyze bundle size and recommend code splitting strategies"
"identify memory leaks in this React component"
```

### 重构技巧
```bash
"refactor this class component to functional component with hooks"
"modernize this code using ES2022 features"
"extract reusable utilities from this component"
```

## 📊 项目组织建议

### 配置管理
- 使用CLAUDE.md记录项目特定的编码标准
- 配置钩子脚本自动化常见任务
- 设置项目特定的快捷命令

### 学习进度跟踪
- 定期更新practice目录中的完成状态
- 记录遇到的问题和解决方案
- 建立个人的最佳实践库

### 团队协作
- 共享CLAUDE.md配置
- 统一代码风格和命名约定
- 建立代码审查流程