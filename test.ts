// tests go here; this will not be compiled when this package is used as a library

//Control motor A forward and set speed
Borsuk.MotorRun(Motor.A, Dir.forward, 0)

//Stop motor
Borsuk.MotorStop(Motor.A)

//Stop Servo
Borsuk.ServoStop(Servo.S0)

//Servo Turn Angle
Borsuk.ServoTurnAngle(Servo.S1, 180)

//Servo Forward
Borsuk.ServoMotorForward(Servo.S1, 180)

//Servo Backward
Borsuk.ServoMotorBackward(Servo.S1, 0)
