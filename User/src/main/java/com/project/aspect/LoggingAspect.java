package com.project.aspect;
import java.util.Arrays;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
	private Logger logger = LoggerFactory.getLogger(LoggingAspect.class);
	String str;

	@Before("execution(* com.project.controller.UserController.*(..))")
	public void logBefore(JoinPoint joinPoint) {
		logger.info("Logging the file");
		String methodName = joinPoint.getSignature().getName();
		String className = joinPoint.getSignature().getDeclaringTypeName();
		str = String.format("Advice applied at %s: %s", className, methodName);
		logger.debug(str);
	}
	@After("execution(* com.project.controller.UserController.*(..))")
	public void logAfter(JoinPoint joinPoint) {
		String methodName = joinPoint.getSignature().getName();
		String className = joinPoint.getSignature().getDeclaringTypeName();
		str = String.format("Advice applied at %s: %s", className, methodName);
		logger.debug(str);
	}
	@AfterThrowing(pointcut = "execution(* com.project.controller.UserController.*(..))", throwing = "exception")
	public void logAfterThrowing(JoinPoint joinPoint, Exception exception) {
		String methodName = joinPoint.getSignature().getName();
		String className = joinPoint.getSignature().getDeclaringTypeName();
		str = String.format("Advice applied at %s: %s", className, methodName);
		logger.debug(str);
		str = String.format("Method args: %s", Arrays.toString(joinPoint.getArgs()));
		logger.info(str);
	}
	@AfterReturning(pointcut = "execution(* com.project.controller.UserController.*(..))", returning = "val")
	public void logAfterReturning(JoinPoint joinPoint, Object val) {
		String methodName = joinPoint.getSignature().getName();
		String className = joinPoint.getSignature().getDeclaringTypeName();
		str = String.format("Adive applied after %s : %s, Returning value: %s", className, methodName, val);
		logger.debug(str);
	}
}