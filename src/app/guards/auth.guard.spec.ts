import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard]
    });

    authGuard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should allow access if credentials are stored', () => {
    localStorage.setItem('credentials', JSON.stringify({ username: 'user', password: 'pass' }));
    const result = authGuard.canActivate();
    expect(result).toBe(true);
  });

  it('should redirect to login if no credentials are stored', () => {
    localStorage.removeItem('credentials');
    const navigateSpy = spyOn(router, 'navigate');
    const result = authGuard.canActivate();
    expect(result).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/Login']);
  });
});
