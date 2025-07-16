# 扩展思考模式示例

## 🧠 什么是扩展思考模式？
扩展思考模式让Claude Code进行更深入、更全面的分析和推理。

## 🎯 使用场景

### 架构决策分析
```bash
# 普通请求
"这个架构设计如何？"

# 扩展思考请求  
"think harder about this microservices architecture decision"
```

### 性能问题诊断
```bash
# 普通请求
"为什么这个函数很慢？"

# 扩展思考请求
"think harder about the performance bottlenecks in this data processing pipeline"
```

### 代码重构建议
```bash
# 普通请求
"如何改进这段代码？"

# 扩展思考请求
"think harder about refactoring this legacy codebase for maintainability and scalability"
```

## 💡 最佳实践

1. **具体化问题域**: 明确指出要分析的技术领域
2. **提供充分上下文**: 包含相关的约束条件和目标
3. **使用技术术语**: 帮助Claude理解具体场景
4. **多角度分析**: 考虑安全性、性能、可维护性等多个维度

## 📝 实际应用案例

### 案例1：数据库设计分析
**输入：**
```
think harder about whether we should use MongoDB or PostgreSQL for this social media application with 1M+ users
```

**期望输出：**
- 详细的技术对比分析
- 扩展性考虑
- 维护成本评估
- 团队技能匹配度
- 具体的实施建议

### 案例2：前端框架选择
**输入：**
```
think harder about choosing between React, Vue, and Svelte for our enterprise dashboard project
```

**期望输出：**
- 生态系统成熟度对比
- 学习曲线分析
- 性能特征评估
- 长期维护考虑
- 团队协作影响