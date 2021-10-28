int main()
{
int A[100][100],B[100][100], i, j, rows, columns, sum[100][100];

printf("Number of rows: ");
scanf("%d",&rows);
printf("Number of columns: ");
scanf("%d",&columns);

for(i=0;i<rows;i++)
{
for(j=0;j<columns;j++)
{
printf("A[%d][%d]: ",i, j);
scanf("%d",&A[i][j]);
}
}
for(i=0;i<rows;i++)
{
for(j=0;j<columns;j++)
{
printf("B[%d][%d]: ",i, j);
scanf("%d",&B[i][j]);
}
}
printf("Array Addition:\n");

for(i=0;i<rows;i++)
{
for(j=0;j<columns;j++)
{

sum[i][j]=A[i][j]+B[i][j];
}
}
for(i=0;i<rows;i++)
{
for(j=0;j<columns;j++)
{

printf("%d ",sum[i][j]);

}
printf("\n");
}
return 0;
}
